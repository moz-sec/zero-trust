# Docker Compose

## 前提条件

- Docker および Docker Compose がインストールされていること。

## 起動方法

```bash
cd zero-trust
docker compose up -d
```

## サービスとポート

- Envoy（PEP）: `http://localhost:8080`
- zero-trust-quiz（Resource）: `http://localhost:3000`

## ポリシーの動作確認

`Authorization` ヘッダが無い場合は 403 になる想定です:

```bash
curl -i http://localhost:8080/headers
```

`Authorization` ヘッダがある場合は 200 になる想定です:

```bash
curl -i -H "Authorization: Bearer test" http://localhost:8080/headers
```
