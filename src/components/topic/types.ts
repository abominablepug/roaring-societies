export type RectLike = { x: number; y: number; w: number; h: number };

export type Props = {
	topicNumber: number;
	characterSrc?: string;
	doorSrc?: string;
	doorCount?: number;
};

export type Door = { id: number; x: number; y: number; w: number; h: number };