
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload
			default:
				return state
			}
		}
		
		
		// export default (state=[], action) => {
		// 	if(action.type === 'FETCH_POSTS'){
		// 		return action.payload
		// 	}
		// 	return state
		// }