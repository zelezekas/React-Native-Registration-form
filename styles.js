import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		justifyContent: 'center',
		backgroundColor: '#eee',
		borderRadius: 4,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.5,
		shadowRadius: 16.0,

		elevation: 20,
		borderWidth: 2,
		borderColor: '#027a6a',
	},
	labels: {
		marginLeft: 45,
	},
	textInput: {
		backgroundColor: '#fff',
		marginVertical: 6,
		marginHorizontal: 45,
		borderWidth: 0.5,
		borderColor: '#027a6a',
		paddingLeft: 8,
	},
	button: {
		marginTop: 10,
		marginLeft: 45,
		width: '40%',
		backgroundColor: '#027a6a',
		borderRadius: 5,
		padding: 5,
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
	},
	checkboxAndTitleWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	checkbox: {
		marginLeft: 8,
	},
	checkboxTitle: {
		marginLeft: 5,
		marginBottom: 2,
	},
});
export default styles;
