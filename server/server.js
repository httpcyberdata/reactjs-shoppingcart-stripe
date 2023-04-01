const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MsD4ZCYr3ZHX3d1cHL1CS9ybmWXYwKC4vB8r9mpcfY64cIvN9u0JKfdFEmmegHIHf7X5pZCYHOKRE24BT4RRzew00de0Q6tD0')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post('/')
