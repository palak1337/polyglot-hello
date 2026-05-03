function sumOneTill(n) {
	let sum = 0
	i = 1
	while (i <= n) {
		sum += i
		i += 1
    }
	return sum
}


console.log(sumOneTill(6))
