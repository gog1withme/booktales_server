export interface CredintalsInterface {
	username?: string;
	email?: string; 
	phone?: string;
	password?: string;
	signinType: 'OTP'|'PASSWORD'
}