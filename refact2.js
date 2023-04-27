function drawRating(vote) {
  const fullStarsQuantity = Math.trunc(vote / 20) + 1;
  return `${'★'.repeat(fullStarsQuantity)}${'☆'.repeat(5 - fullStarsQuantity)}`;
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★