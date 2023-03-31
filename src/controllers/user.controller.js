import bcrypt from "bcrypt";
const saltRounds = 10;


export async function crearCuenta(req, res) {

    try {
        const { correo, contraseña, confirmacionContraseña } = req.body;

        if (contraseña == confirmacionContraseña) {
            const hashed = await bcrypt.hash(contraseña, saltRounds);
            console.log(hashed);
            res.json({ isOk: true, message: "Usuario almacenado de forma correcta" });
            return;
        } else {
            res.json({ isOk: false, message: "Las contraseñas no coinciden" });
            return;
        }
    }

    catch (error) {
    }

}