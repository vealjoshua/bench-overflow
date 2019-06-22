export interface Question {
	id: string
	question: string
	username: string
	tags: string[]
	client: string
	los: string
	comments: Reply[]
	timestamp: string
}

export interface Reply {
	_id: string
	username: string
	answer: string
	timestamp: string
	upvotes: number
	downvotes: number
}
