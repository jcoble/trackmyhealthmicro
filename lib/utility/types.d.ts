export type ErrorResponse = {
	shoudDisplayAsFormError: boolean;
	status: number;
	message: string;
	field?: string;
};
