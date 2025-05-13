import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const formatDate = (date:string) => {
	return new Date(date).toLocaleDateString('pl-PL', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
}

export const getAssetUrl = (thumbnail: string) => {
	return `https://studio.gameend.pl/assets/${thumbnail}`;
};

export const truncateTitle = (title: string) => {
  return title.length > 15 ? title.slice(0, 15) + '...' : title;
}