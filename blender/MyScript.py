import bpy
import os

# ========== SETTINGS ==========
bake_type = 'COMBINED'  # Options: 'COMBINED', 'DIFFUSE', 'NORMAL', 'AO', etc.
save_images = True
output_folder = bpy.path.abspath("//baked_textures")
image_resolution = (1024, 1024)  # Width x Height
# ==============================

# Create output folder if it doesn't exist
if save_images and not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Get all selected mesh objects
selected_objects = [obj for obj in bpy.context.selected_objects if obj.type == 'MESH']

if not selected_objects:
    raise Exception("❌ No mesh objects selected.")

baked_images = set()

for obj in selected_objects:
    print(f"\n🎯 Processing object: {obj.name}")
    bpy.context.view_layer.objects.active = obj

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

        image_node = None
        for node in mat.node_tree.nodes:
            if node.type == 'TEX_IMAGE':
                image_node = node
                break

        if not image_node:
            print(f"  ⚠️ No image texture node found in material '{mat.name}', skipping")
            continue

        # If the image node has no image, create one
        if image_node.image is None:
            image_name = f"{obj.name}_{mat.name}"
            print(f"  🖼️ Creating new image: {image_name}")
            image = bpy.data.images.new(
                name=image_name,
                width=image_resolution[0],
                height=image_resolution[1],
                alpha=True,
                float_buffer=False
            )
            image_node.image = image
        else:
            image = image_node.image
            # Skip uninitialized image (just in case)
            if image.size[0] == 0 or image.size[1] == 0:
                print(f"  ⚠️ Uninitialized image in material '{mat.name}', skipping")
                continue

        # Make image node active
        mat.node_tree.nodes.active = image_node

        # Bake the material
        print(f"  🔥 Baking '{mat.name}' on '{obj.name}'...")
        bpy.ops.object.bake(type=bake_type)

        if save_images:
            image_filename = bpy.path.clean_name(f"{obj.name}_{mat.name}")
            if image_filename in baked_images:
                print(f"  ⚠️ Image '{image_filename}.png' already saved, skipping save")
                continue
            baked_images.add(image_filename)

            output_path = os.path.join(output_folder, f"{image_filename}.png")
            image.filepath_raw = output_path
            image.file_format = 'PNG'
            image.save()
            print(f"  💾 Saved: {output_path}")

print("\n✅ Baking complete for all selected objects.")
