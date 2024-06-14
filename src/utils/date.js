export default function postedAt(date) {
  const dateNow = new Date();
  const datePosted = new Date(date);
  const dateDifferenceInSeconds = Math.floor((dateNow - datePosted) / 1000);

  const intervals = [
    { label: 'hari', seconds: 86400 },
    { label: 'jam', seconds: 3600 },
    { label: 'menit', seconds: 60 },
    { label: 'detik', seconds: 1 },
  ];

  const interval = intervals.find(({ seconds }) => dateDifferenceInSeconds >= seconds);

  if (interval) {
    const count = Math.floor(dateDifferenceInSeconds / interval.seconds);
    return `${count} ${interval.label} lalu`;
  }

  return 'baru saja';
}
