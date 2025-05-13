import bpy
import os

# ========== SETTINGS ==========
bake_type = 'COMBINED'  # Options: 'COMBINED', 'DIFFUSE', 'NORMAL', 'AO', etc.
save_images = True
output_folder = bpy.path.abspath("//baked_textures")
# ==============================

# Create output folder if it doesn't exist
if save_images and not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Get all selected mesh objects
selected_objects = [obj for obj in bpy.context.selected_objects if obj.type == 'MESH']

if not selected_objects:
    raise Exception("❌ No mesh objects selected.")

# Track baked image names to avoid overwriting
baked_images = set()

for obj in selected_objects:
    print(f"\n🎯 Processing object: {obj.name}")
    bpy.context.view_layer.objects.active = obj

    # Get actually used materials by face
    used_materials = set()
    for poly in obj.data.polygons:
        mat_index = poly.material_index
        if mat_index < len(obj.material_slots):
            mat = obj.material_slots[mat_index].material
            if mat:
                used_materials.add(mat)

    for mat in used_materials:
        if not mat or not mat.use_nodes:
            print(f"  ⚠️ Skipping unused or non-node material on '{obj.name}'")
            continue

        # Find first Image Texture node with an assigned image
        image_node = None
        for node in mat.node_tree.nodes:
            if node.type == 'TEX_IMAGE' and node.image:
                # Skip uninitialized images (size 0x0)
                if node.image.size[0] == 0 or node.image.size[1] == 0:
                    print(f"  ⚠️ Uninitialized image in material '{mat.name}', skipping")
                    continue
                image_node = node
                break

        if not image_node:
            print(f"  ⚠️ No valid image node found in material '{mat.name}'")
            continue

        # Make this image node active for baking
        mat.node_tree.nodes.active = image_node

        # Bake the material
        print(f"  🔥 Baking '{mat.name}' on '{obj.name}'...")
        bpy.ops.object.bake(type=bake_type)

        # Save the image
        if save_images:
            image_filename = bpy.path.clean_name(f"{obj.name}_{mat.name}")
            # Avoid saving the same image twice
            if image_filename in baked_images:
                print(f"  ⚠️ Image '{image_filename}.png' already saved, skipping save")
                continue
            baked_images.add(image_filename)

            output_path = os.path.join(output_folder, f"{image_filename}.png")
            image_node.image.filepath_raw = output_path
            image_node.image.file_format = 'PNG'
            image_node.image.save()
            print(f"  💾 Saved: {output_path}")

print("\n✅ Baking complete for all selected objects.")
