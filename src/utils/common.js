export const successResponse = (payload={}) => {
	return {
		success: true,
		response: payload
	};
};

export const errorResponse = (message="") => {
	return {
		success: false,
		error: message
	};
};