from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

IS_ALIVE = "yes"
# IS_ALIVE = "no"

MYSQL_SERVER = "bancodados"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_BANCO = "QuickRecipes"

def get_conexao_banco():
    conexao = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_BANCO
    )

    return conexao

@servico.route("/home/<int:pagina>/<int:tamanho_pagina>", methods=["GET"])
def get_home(pagina, tamanho_pagina):
    home = []

    conexao = get_conexao_banco()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "SELECT receitas.id AS receitas_id, receitas.name AS name, " +
        "receitas.cover AS image, " +
        "receitas.time AS time " +
        "FROM receitas AS receitas " +
        "LIMIT " + str((pagina - 1) * tamanho_pagina) + ", " + str(tamanho_pagina)
    )
    home = cursor.fetchall()

    return jsonify(home)


if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=True
    )
