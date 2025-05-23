import zipfile
import os

# Create project directory
project_dir = "/mnt/data/EmptyCup_Frontend"
os.makedirs(project_dir, exist_ok=True)

# File contents
files = {
    "index.html": """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>EmptyCup</title>
  <link rel="stylesheet" href="styles.css"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"/>
</head>
<body>
  <header>
    <div class="logo">
      <img src="https://i.ibb.co/MVPMp5G/logo.png" alt="Logo"/>
      <h1>EmptyCup</h1>
    </div>
    <div class="menu">
      <i class="bi bi-three-dots-vertical"></i>
    </div>
  </header>

  <nav class="tabs">
    <button class="active">Contacts</button>
    <button onclick="alert('Gallery not implemented')"><i class="bi bi-image"></i> Gallery</button>
    <button onclick="alert('Map not implemented')"><i class="bi bi-geo-alt"></i> Map</button>
    <button onclick="showShortlisted()"><i class="bi bi-heart"></i> Shortlisted</button>
    <button onclick="sortCards()"><i class="bi bi-sort-down-alt"></i> Sort</button>
  </nav>

  <section class="form-section">
    <h2>Add New Designer</h2>
    <form id="designerForm">
      <input type="text" id="name" placeholder="Name" required>
      <input type="text" id="rating" placeholder="Stars (★☆☆☆☆)" required>
      <input type="text" id="description" placeholder="Description" required>
      <input type="number" id="projects" placeholder="Projects" required>
      <input type="number" id="years" placeholder="Years" required>
      <input type="text" id="price" placeholder="Price ($, $$, $$$)" required>
      <input type="text" id="phone1" placeholder="Phone 1" required>
      <input type="text" id="phone2" placeholder="Phone 2" required>
      <button type="submit">Add Designer</button>
    </form>
  </section>

  <main id="cardsContainer"></main>

  <script src="script.js"></script>
</body>
</html>
""",
    "styles.css": """/* CSS STYLES HERE */""",  # Truncated for now, will paste full in next step
    "script.js": """// JS SCRIPT HERE""",  # Truncated for now, will paste full in next step
    "README.txt": """# EmptyCup Frontend Project

This is a simple frontend-only project that shows a list of designers with their details. You can add new designers using the form and interact with the cards.

## Features
- Responsive design
- Add new designer with a form
- Shortlist and hide cards
- LocalStorage used to save data
- Bootstrap icons used for better UI

## How to Run
1. Unzip the project folder.
2. Open `index.html` in your browser.
3. That's it! You can now use the app.

This project doesn't require any server or backend. Everything works in your browser.

Enjoy using EmptyCup!
"""
}

# Paste full CSS and JS
files["styles.css"] = open("/mnt/data/styles.css", "w").write("""* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}
body {
  background: #fff;
  color: #333;
  padding: 10px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo img {
  width: 30px;
  height: 30px;
}
h1 {
  font-size: 20px;
}
.menu {
  font-size: 24px;
  cursor: pointer;
}
.tabs {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.tabs button {
  background: none;
  border: none;
  padding: 10px;
  font-weight: bold;
  color: #888;
  cursor: pointer;
}
.tabs .active {
  color: #e28e16;
  border-bottom: 2px solid #e28e16;
}
.card {
  background: #fff8e7;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.01);
}
.card h2 {
  font-size: 20px;
  margin-bottom: 5px;
}
.stars {
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
}
.card p {
  margin-bottom: 10px;
}
.info {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  text-align: center;
}
.contacts {
  margin-bottom: 10px;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.actions button {
  flex: 1 1 40%;
  padding: 8px;
  background: none;
  border: 1px solid #aa5a3d;
  color: #aa5a3d;
  border-radius: 5px;
  cursor: pointer;
}
.actions button:hover {
  background: #f3e1d4;
}
.form-section {
  margin: 20px 0;
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0,0,0,0.1);
}
.form-section input,
.form-section button {
  display: block;
  width: 100%;
  margin: 5px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
@media (min-width: 768px) {
  body {
    max-width: 700px;
    margin: auto;
  }
  .tabs {
    justify-content: space-between;
  }
  .actions button {
    flex: 1 1 30%;
  }
}""")

files["script.js"] = open("/mnt/data/script.js", "w").write("""<JS FULL CONTENT WILL BE HERE>""")  # Will paste next step

# Write files
for filename, content in files.items():
    filepath = os.path.join(project_dir, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

# Create ZIP
zip_path = "/mnt/data/EmptyCup_Frontend.zip"
with zipfile.ZipFile(zip_path, "w") as zipf:
    for root, _, filenames in os.walk(project_dir):
        for fname in filenames:
            full_path = os.path.join(root, fname)
            zipf.write(full_path, os.path.relpath(full_path, project_dir))

zip_path
