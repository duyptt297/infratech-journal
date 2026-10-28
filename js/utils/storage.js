// Quản lý lưu trữ cục bộ (Local Storage & Bookmarks Manager)
const StorageManager = {
  BOOKMARKS_KEY: "infratech_bookmarks",
  THEME_KEY: "infratech_theme",
  LANG_KEY: "infratech_lang",

  getBookmarks() {
    try {
      const data = localStorage.getItem(this.BOOKMARKS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  isBookmarked(id) {
    const list = this.getBookmarks();
    return list.includes(id);
  },

  toggleBookmark(id) {
    let list = this.getBookmarks();
    if (list.includes(id)) {
      list = list.filter(item => item !== id);
    } else {
      list.push(id);
    }
    try {
      localStorage.setItem(this.BOOKMARKS_KEY, JSON.stringify(list));
    } catch (e) {}
    return list.includes(id);
  },

  clearBookmarks() {
    try {
      localStorage.removeItem(this.BOOKMARKS_KEY);
    } catch (e) {}
  },

  getTheme() {
    return localStorage.getItem(this.THEME_KEY) || "dark";
  },

  setTheme(theme) {
    try {
      localStorage.setItem(this.THEME_KEY, theme);
    } catch (e) {}
  },

  getLang() {
    return localStorage.getItem(this.LANG_KEY) || "vi";
  },

  setLang(lang) {
    try {
      localStorage.setItem(this.LANG_KEY, lang);
    } catch (e) {}
  }
};

window.StorageManager = StorageManager;
