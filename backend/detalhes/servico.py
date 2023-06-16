from flask import Flask, jsonify
import mysql.connector as mysql

servico = Flask(__name__)

# IS_ALIVE = "yes"
IS_ALIVE = "no"

MYSQL_SERVER = "bancodados"
MYSQL_USER = "root"
MYSQL_PASS = "admin"
MYSQL_BANCO = "QuickRecipes"


def get_conexao_banco():
    conexao = mysql.connect(
        host=MYSQL_SERVER, user=MYSQL_USER, password=MYSQL_PASS, database=MYSQL_BANCO)

    return conexao

@servico.route("/detalhes/<int:receitas_id>")
def get_detalhes(receitas_id):
    

    conexao = get_conexao_banco()
    cursor = conexao.cursor(dictionary=True)
    cursor.execute(
        "select text from instrucoes where instrucoes_id = " + str(receitas_id)
        
    )
    instrucoes = cursor.fetchall()
    
    cursor.execute(
        "select name from ingredientes where ingredientes_id = " + str(receitas_id)
        
    )
    ingredientes = cursor.fetchall()

    resultado = {'ingredientes': [item['name'] for item in ingredientes], 'instrucoes': [item['text'] for item in instrucoes]}

    return jsonify(resultado)



if __name__ == "__main__":
    servico.run(
        host="0.0.0.0",
        debug=True
    )