export const findOne = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: 'secret_admin',
};

export const validUser = { email: 'admin@admin.com', password: 'secret_admin' };

export const invalidPassword = { email: 'admin@admin.com', password: 'your_password' };

export const invalidEmail = { email: 'admiadmin.com', password: 'your_password' };

export const noEmail = { password: 'your_password' };

export const rigthResp = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImlhdCI6MTY2NjM5MzM0OSwiZXhwIjoxNjY3MjU3MzQ5fQ.0h2eWInBopIUHIZm2kxCRydo8FmTYCQ1C-t7OhNyl80';