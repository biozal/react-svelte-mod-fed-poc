interface INewProject {
	handleSubmit: (values: { name: string, description: string}) => void,
	errorCode: string,
	errorMessage: string,
}