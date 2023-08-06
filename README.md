## テンプレ作成（実行不要）

#### Next プロジェクト作成

```
npx create-next-app@latest
```

#### フォーマッター追加

```
npm install -D prettier prettier-plugin-tailwindcss
```

\*Tailwind のクラスの自動フォーマットのため、Prettier のバージョンを 2.8.8 に変更

## 環境構築

#### パッケージのインストール

```
npm install
```

#### 起動

```
npm run dev
```

[localhost:3000](localhost:3000)

## フォーマット設定

#### VSCode の拡張をインストール

- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- Simple React Snippets

#### VSCode の自動フォーマット設定

`⌘ ,`で設定を開き、自動フォーマット設定を追加

settings.json の例

```
{
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": true
    },
}
```
