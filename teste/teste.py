import unittest
import requests

HOME_URL = 'http://192.168.1.3:5001'
DETALHES_URL = 'http://192.168.1.3:5002'


class TestBackendAPI(unittest.TestCase):
    def test_get_home(self):
        # Define o endpoint para a rota /home
        endpoint = f"{HOME_URL}/home/1/6"

        # Faz uma requisição GET para a rota /home
        response = requests.get(endpoint)

        # Verifica se a requisição foi bem-sucedida (código de status 200)
        self.assertEqual(response.status_code, 200)

        # Verifica se os dados retornados são uma lista
        data = response.json()
        self.assertIsInstance(data, list)

        # Verifica se a lista de feeds não está vazia
        self.assertTrue(len(data) > 0, "A lista de feeds está vazia")
    
    def test_get_detail(self):
        # Define o endpoint para a rota /detalhes/1
        endpoint = f"{DETALHES_URL}/detalhes/1"

        # Faz uma requisição GET para a rota /detalhes/1
        response = requests.get(endpoint)

        # Verifica se a requisição foi bem-sucedida (código de status 200)
        self.assertEqual(response.status_code, 200)

        # Verifica se os dados retornados são um objeto
        data = response.json()
        self.assertIsInstance(data, dict)

        # Verifica se o campo "ingredientes" está presente no objeto
        self.assertIn("ingredientes", data)

        # Verifica se o campo "instrucoes" está presente no objeto
        self.assertIn("instrucoes", data)

        # Verifica se o campo "ingredientes" não está vazio
        self.assertTrue(data["ingredientes"], "O campo 'ingredientes' está vazio")

        # Verifica se o campo "instrucoes" não está vazio
        self.assertTrue(data["instrucoes"], "O campo 'instrucoes' está vazio")

            
if __name__ == "__main__":
    unittest.main()