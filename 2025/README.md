# Christmas 2025

2025 年前後端應用專案

## 專案結構

```
2025/
├── src/
│   ├── frontend/          # 前端原始碼
│   │   ├── Templates/     # Pug 模板
│   │   ├── Styles/        # Stylus 樣式
│   │   ├── Javascript/   # JavaScript
│   │   └── Assets/        # 圖片等資源
│   └── backend/           # 後端原始碼
│       ├── api/           # API 路由
│       ├── database/      # 資料庫相關
│       └── scripts/       # 工具腳本
├── dist/                  # 編譯輸出
├── package.json
└── netlify.toml
```

## 安裝

```bash
npm install
```

## 開發

```bash
# 編譯所有檔案
npm run build

# 監聽模式（自動編譯）
npm run watch

# 啟動開發伺服器
npm run dev
```

## 編譯

- Pug: `npm run build:pug`
- Stylus: `npm run build:css`
- JavaScript: `npm run build:js`
- Assets: `npm run build:assets`
