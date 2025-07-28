@echo off
echo === Limpando cache do Next.js ===
rmdir /s /q .next
if exist node_modules\.cache (
    echo === Limpando cache do node_modules ===
    rmdir /s /q node_modules\.cache
)
echo === Iniciando o servidor de desenvolvimento ===
npm run dev
pause
