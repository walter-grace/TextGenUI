import React, { Component } from 'react';
import {
	jsx,
	ThemeProvider,
	Flex,
	Box,
	Button,
	Card,
	Text,
	Label,
	Input,
	Alert,
	Slider,
	Divider,
	Styled as S
  } from "theme-ui";

class TextFileReader extends React.Component {

	Tweet(){
		alert('Post this text to your tweet')
	}
	constructor(props) {
		super(props);

		this.state = {
			text: ""
		};
	}

	componentDidMount() {
		this.readTextFile(this.props.txt);
	}

	readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
	};

	render() {
		return (
			<div>
				<Card
				mb={5}
				mt={20}
				sx={{
					maxWidth: 800,
					padding: "30px"
				}}
				>
				<Text>
				{this.state.text.split("\n").map((item, key) => {
					return <span key={key}>{item}<br /></span>;
				})}
			</Text>
			</Card>
			<Alert variant="success" m={10}>
				Success
			</Alert>
				<Button onClick={this.Tweet} variant="info">Tweet</Button>
			</div>
		);
	}
}

export default TextFileReader;