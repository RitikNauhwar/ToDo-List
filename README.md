# 🧾 Simple To-Do Web Application

A lightweight, fully client-side To-Do List web application built using **HTML**, **CSS**, and **JavaScript**, featuring task persistence via the **LocalStorage API**.  
It allows users to add, delete, mark, and clear tasks—all while saving progress automatically in the browser.

---

## 🚀 Features

✅ Add new tasks  
✅ Mark tasks as completed  
✅ Delete individual tasks  
✅ Clear all tasks at once  
✅ Auto-save tasks using **LocalStorage**  
✅ Works completely offline  
✅ Responsive, modern UI design  

---

## 🧱 Project Structure

📂 Simple-ToDo-App
│
├── 📄 index.html # Main HTML structure
├── 🎨 style.css # App styling (UI & layout)
└── ⚙️ script.js # Core JavaScript logic

## 🧩 Tech Stack

| Layer | Technology | Role |
|--------|-------------|------|
| **Frontend Structure** | HTML5 | Layout & content structure |
| **Styling & UX** | CSS3 | UI design, layout, animations |
| **Interactivity** | Vanilla JavaScript (ES6) | Task logic, event handling |
| **Data Persistence** | LocalStorage API | Saves tasks locally in browser |


## 🧠 Logic Flow

```text
[Page Load]
      │
      ▼
  loadTasks() → Fetch saved tasks → Render on screen
      │
      ▼
User Adds Task (click / Enter)
      │
      ▼
addTask() → createTaskElement() → saveTaskToLocal()
      │
      ▼
[Task List Updated + Saved in LocalStorage]
      │
      ├─ Click Task → Toggle completed → updateLocalStorage()
      ├─ Click Delete → Remove task → updateLocalStorage()
      └─ Click Clear All → Confirm → localStorage.clear() + Empty list
