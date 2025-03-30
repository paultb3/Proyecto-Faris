export const renderRegister = (element) => {
    const html = `
    <form class="modal-content animate">
        <span class="close">&times;</span>
        <div class="container">
            <h2>Register</h2>
            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <button type="submit">Register</button>
        </div>
    </form>
    `;

    element.innerHTML = html;
}