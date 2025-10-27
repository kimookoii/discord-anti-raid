# 🛡️ Anti Raid Discord Bot

Bot ini dirancang untuk melindungi server Discord dari **aksi raid** seperti spam pembuatan atau penghapusan role, channel, serta ban/kick massal.  
Dibangun menggunakan **Node.js** dan **Discord.js**, dengan sistem deteksi otomatis, whitelist, serta sistem punishment (ban, kick, demote).

---

## 🚀 Fitur Utama

- 🔒 **Anti Role Create/Delete**
- 🧱 **Anti Channel Create/Delete**
- 🚫 **Anti Mass Kick / Ban**
- ⚙️ **Sistem Limit & Punishment**
  - Pilihan: `ban`, `kick`, atau `demote`
- 📝 **Log Activity**
  - Semua aktivitas berbahaya dicatat ke channel log
- 👑 **Whitelist System**
  - Menambahkan user yang diizinkan agar tidak terdeteksi
- 💾 **Quick.DB Support**
  - Data tersimpan secara lokal dan ringan
- 🎮 **Custom Prefix & Command Handler**
- 💬 **Dynamic Status Rotation**

---

## 🧩 Persyaratan

Sebelum menjalankan bot, pastikan kamu sudah menginstal:

- [Node.js](https://nodejs.org/en/) versi **16.x** atau lebih tinggi  
- [Discord.js](https://discord.js.org/) versi **12.x**
- **quick.db** untuk penyimpanan data  

---

## ⚙️ Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/kimookoii/discord-anti-raid.git
   cd discord-anti-raid

2. **Instal Dependencies**

   ```bash
   npm install
   ```

3. **Konfigurasi**

   * Buka file `.env` lalu isi token:

     ```json
       TOKEN=token_bot
     ```

   * Buka file `config.json` lalu isi prefix:

     ```json
     {
       "prefix": "$",
     }
     ```
     
4. **Jalankan Bot**

   ```bash
   node index.js
   ```

---

## 🧠 Struktur Folder

```
📁 project-root
├── handlers/
│   └── command.js           # Handler untuk semua command
├── commands/                # Folder command tambahan
├── config.json              # Konfigurasi utama
├── index.js                 # File utama bot
└── package.json             # Dependensi project
```

---

## 🛠️ Contoh Command

| Command                        | Deskripsi                                  |
| ------------------------------ | ------------------------------------------ |
| `$help`                        | Menampilkan daftar command                 |
| `$setlimit <aksi> <jumlah>`    | Atur batas tindakan (contoh: rolecreate 3) |
| `$setpunish <ban/kick/demote>` | Menentukan hukuman pelanggar               |
| `$setlogs #channel`            | Set channel untuk log aktivitas            |
| `$whitelist add <@user>`       | Tambahkan user ke whitelist                |

---

## 🔍 Sistem Deteksi

| Event                            | Deskripsi                                     |
| -------------------------------- | --------------------------------------------- |
| `roleCreate`, `roleDelete`       | Deteksi pembuatan/penghapusan role berlebihan |
| `channelCreate`, `channelDelete` | Deteksi spam channel                          |
| `guildMemberRemove`              | Deteksi mass kick/ban                         |
| `message`                        | Menangani prefix & command                    |

---

## 👥 Developer

**Axan Ft. ZICC Developer**

> "Protect your community, automate your peace."

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah **MIT License** — silakan gunakan, ubah, atau kembangkan sesuai kebutuhanmu.

---
