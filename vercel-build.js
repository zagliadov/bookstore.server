
const { execSync } = require('child_process');

try {
  // Выполните `prisma generate` перед сборкой
  execSync('npx prisma generate');
} catch (error) {
  console.error('Ошибка при выполнении `prisma generate`:', error.message);
  process.exit(1);
}