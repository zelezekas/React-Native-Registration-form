import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
	Text,
	View,
	useWindowDimensions,
	TextInput,
	Alert,
	CheckBox,
	Pressable,
} from 'react-native';
import styles from './styles';

export default function App() {
	const window = useWindowDimensions();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [hasLowercaseLetter, setHasLowercaseLetter] = useState(false);
	const [hasUppercaseLetter, setHasUppercaseLetter] = useState(false);
	const [hasDigit, setHasDigit] = useState(false);
	const [hasSixCharacters, setHasSixCharacters] = useState(false);
	const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);

	const resetToDefaultValues = () => {
		setUsername('');
		setPassword('');
		setHasLowercaseLetter(false);
		setHasUppercaseLetter(false);
		setHasDigit(false);
		setHasSixCharacters(false);
		setRegisterButtonDisabled(true);
	};

	const handleUsername = (text) => {
		setUsername(text);
	};

	const handlePassword = (text) => {
		setPassword(text);
	};
	const handleSubmit = () => {
		Alert.alert('Submitted', `Username: ${username}, Password: ${password}`);
		resetToDefaultValues();
	};
	useEffect(() => {
		/[a-z]/.test(password) !== hasLowercaseLetter &&
			setHasLowercaseLetter(!hasLowercaseLetter);
		/[A-Z]/.test(password) !== hasUppercaseLetter &&
			setHasUppercaseLetter(!hasUppercaseLetter);
		/\d/.test(password) !== hasDigit && setHasDigit(!hasDigit);
		/.{6,}/.test(password) !== hasSixCharacters &&
			setHasSixCharacters(!hasSixCharacters);
		(username &&
			hasLowercaseLetter &&
			hasUppercaseLetter &&
			hasDigit &&
			hasSixCharacters) === registerButtonDisabled &&
			setRegisterButtonDisabled(!registerButtonDisabled);
	}, [
		password,
		hasLowercaseLetter,
		hasUppercaseLetter,
		hasDigit,
		hasSixCharacters,
		registerButtonDisabled,
		username,
	]);

	return (
		<View style={styles.layout}>
			<View
				style={{
					...styles.card,
					width: window.width > window.height ? 400 : '95%',
					height: window.width > window.height ? '95%' : 400,
				}}
			>
				<Text style={styles.labels}>Username:</Text>
				<TextInput
					underlineColorAndroid="#fff"
					value={username}
					onChangeText={handleUsername}
					placeholder="Enter username"
					style={styles.textInput}
				/>
				<Text style={styles.labels}>Password:</Text>
				<TextInput
					value={password}
					onChangeText={handlePassword}
					secureTextEntry={true}
					placeholder="Enter password"
					style={styles.textInput}
				/>
				<View>
					<Text style={{ ...styles.labels, marginBottom: 8 }}>
						Your password must contain:
					</Text>
					<View style={styles.checkboxAndTitleWrapper}>
						<CheckBox style={styles.checkbox} value={hasLowercaseLetter} />
						<Text style={styles.checkboxTitle}>one lowercase letter,</Text>
					</View>
					<View style={styles.checkboxAndTitleWrapper}>
						<CheckBox style={styles.checkbox} value={hasUppercaseLetter} />
						<Text style={styles.checkboxTitle}>one uppercase letter,</Text>
					</View>
					<View style={styles.checkboxAndTitleWrapper}>
						<CheckBox style={styles.checkbox} value={hasDigit} />
						<Text style={styles.checkboxTitle}>one digit and</Text>
					</View>
					<View style={styles.checkboxAndTitleWrapper}>
						<CheckBox style={styles.checkbox} value={hasSixCharacters} />
						<Text style={styles.checkboxTitle}>
							must have at least six characters.
						</Text>
					</View>
				</View>
				<Pressable
					style={styles.button}
					disabled={registerButtonDisabled}
					onPress={handleSubmit}
				>
					<Text style={styles.buttonText}>Register</Text>
				</Pressable>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
