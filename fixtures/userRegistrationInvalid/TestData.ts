const data: any[] = [
    {
        testName: 'empty fields in password fields',
        email: '',
        password: '',
        confirmPassword: '',
        0: 'Please fill in the e-mail address.',
        1: "Please fill in the 'Password' field.",
        2: "Please confirm your password.",
    },
    {
        testName: 'special symbols in password fields',
        email: 'anskmf@mj.com',
        password: '&&(^&#*@',
        confirmPassword: '&&(^&#*@',
        0: "Passwords must have at least one digit ('0'-'9').",
        1: "Passwords must have at least one lowercase letter ('a'-'z').",
        2: "Passwords must have at least one uppercase letter ('A'-'Z')."
    },
    {
        testName: 'only numbers in password fields',
        email: 'anskmf@mj.com',
        password: '12345678',
        confirmPassword: '12345678',
        0: "Passwords must have at least one lowercase letter ('a'-'z').",
        1: "Passwords must have at least one uppercase letter ('A'-'Z')."
    },
    {
        testName: '7 numbers in password fields',
        email: 'anskmf@mj.com',
        password: 'Qws12fd',
        confirmPassword: 'Qws12fd',
        0: "Passwords must be at least 8 characters long."
    },
]

export { data };

