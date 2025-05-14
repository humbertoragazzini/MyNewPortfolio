import bpy

# ========== SETTINGS ==========
group_size = 5
image_resolution = (1024, 1024)
material_prefix = "AutoMat"
image_prefix = "AutoImage"
connect_image_to_shader = False  # 🔗 Set to True if you want the image connected to Base Color
smart_uv_angle_limit = 66        # Angle threshold for splitting UV islands
smart_uv_island_margin = 0.03    # Padding between UV islands
# ==============================

# Collect selected meshes
selected_meshes = [obj for obj in bpy.context.selected_objects if obj.type == 'MESH']

# Sort for consistency
selected_meshes.sort(key=lambda o: o.name)

# Split into groups
for i in range(0, len(selected_meshes), group_size):
    group = selected_meshes[i:i + group_size]

    if len(group) < 2:
        print(f"⚠️ Skipping group with less than 2 objects: {[o.name for o in group]}")
        continue

    print(f"\n🔗 Joining group: {[obj.name for obj in group]}")

    # Deselect everything and select only the current group
    bpy.ops.object.select_all(action='DESELECT')
    for obj in group:
        obj.select_set(True)
    bpy.context.view_layer.objects.active = group[0]

    # Join objects
    bpy.ops.object.join()
    joined_obj = bpy.context.active_object

    # Smart UV unwrap
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.uv.smart_project(angle_limit=smart_uv_angle_limit, island_margin=smart_uv_island_margin)
    bpy.ops.object.mode_set(mode='OBJECT')
    print(f"  🧠 UV unwrapped '{joined_obj.name}' with Smart UV Project")

    # Create material and image
    mat_index = i // group_size
    mat_name = f"{material_prefix}_{mat_index}"
    image_name = f"{image_prefix}_{mat_index}"

    mat = bpy.data.materials.new(name=mat_name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    links = mat.node_tree.links

    # Create and assign image node
    image = bpy.data.images.new(name=image_name, width=image_resolution[0], height=image_resolution[1])
    tex_node = nodes.new('ShaderNodeTexImage')
    tex_node.image = image
    tex_node.label = "Bake Target"
    tex_node.location = (-400, 0)

    # Optional: connect to shader
    bsdf = nodes.get('Principled BSDF')
    if connect_image_to_shader and bsdf:
        links.new(tex_node.outputs['Color'], bsdf.inputs['Base Color'])
        print(f"  🔗 Connected '{image.name}' to Base Color")
    else:
        print(f"  🖼️ Created image node '{image.name}' (not connected)")

    # Assign material to object
    if len(joined_obj.material_slots) == 0:
        joined_obj.data.materials.append(mat)
    else:
        joined_obj.material_slots[0].material = mat

    print(f"✅ '{joined_obj.name}' now has material '{mat.name}' and image '{image.name}'")

print("\n🎉 Done: all groups processed, UV unwrapped, and materials created.")
