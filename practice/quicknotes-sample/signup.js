function	signup(email,	password)	{
if	(!email.includes('@'))	return	{	error:	'invalid'	};
if	(password.length	<	8)	return	{	error:	'weak'	};

// 10 rounds balances hashing cost vs. request latency; higher rounds
// slow down brute-force attacks but also slow down every signup. 
const	hash	=	bcrypt.hashSync(password,	10);
const	existing	=	db.users.find(u	=>	u.email	===	email);
if	(existing)	return	{	error:	'exists'	};

// verified starts false - login is blocked elsewhere until the
// confirmation email is clicked, so this isn't dead state.
const	user	=	db.users.insert({	email,	hash,	verified:	false	});
sendEmail(user.email,	'confirm-token-'	+	user.id);
return	{	id:	user.id	};
}