import avatar from '/img/img_avatar2.png'; // Ruta externa ya que no puedo usarlo desde el mismo src idk

export const renderModal = (element) => {
    const html = `
    <form class="modal-content animate" action="/action_page.php">
        <span class="close">&times;</span>
        <div class="imgcontainer">
            <img src="${avatar}" alt="Avatar" class="avatar">
        </div>
        <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <button type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>           
        </div>
    </form>
    <div class="contain-register">
            <a href="#" id="register-link">Register</a>
    </div>
    `; 
    element.innerHTML = html;
}
