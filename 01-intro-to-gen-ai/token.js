// Tokenization is the process of converting text into tokens, which are smaller units that can be processed by machine learning models. In this example, we will use the `tiktoken` library to tokenize a simple string.
// npm library tiktoken - npm install tiktoken

import { get_encoding } from "tiktoken";

const encoderForGpt2 = get_encoding('gpt2');

encoderForGpt2.encode("Hello, I am Raghav");

const encode = encoderForGpt2.encode("Hello, I am Raghav");
console.log(encode);

const decode = encoderForGpt2.decode(encode);
console.log(new TextDecoder().decode(decode));