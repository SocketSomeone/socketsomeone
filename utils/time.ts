export function dateToDuration(time?: Date | number): string {
	if (time instanceof Date) {
		time = time.getTime();
	}

	const diff = Math.abs(Date.now() - (time ?? 0));

	const seconds = Math.floor((diff / 1000) % 60);
	const minutes = Math.floor((diff / 1000 / 60) % 60);
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));


	return [days, hours, minutes, seconds]
		.map((v) => v.toString().padStart(2, '0'))
		.filter((v, index) => v !== '00' || index > 1)
		.join(':');
}
