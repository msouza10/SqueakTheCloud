# Guia de Contribuição - Squeak the Cloud 🐁

Obrigado pelo seu interesse em colaborar com o **Squeak the Cloud**! Toda contribuição de segurança ofensiva, novas assinaturas de Shadow Admin e otimizações de código são muito bem-vindas.

Como somos um projeto voltado para segurança e Red Teaming, buscamos manter o código-fonte limpo, portável e eficiente.

---

## 🎯 Como Posso Contribuir?

Você pode colaborar com o projeto de diversas formas:
1. **Resolvendo Issues Abertas**: Dê uma olhada na nossa lista de [Issues](https://github.com/s3r4ph-0r4cul0/SqueakTheCloud/issues) para encontrar tarefas como enumeração de novos serviços (ex: Storage) ou flags de verbose.
2. **Adicionando Novos Vetores de Ataque**: Se você descobriu um novo caminho de escalada de privilégios ou impersonificação de identidades em AWS, Azure ou GCP, sinta-se livre para propor a implementação do detector.
3. **Reportando Bugs ou Sugestões**: Abra uma nova Issue descrevendo a falha encontrada ou a melhoria desejada.

---

## 💻 Fluxo de Desenvolvimento Local

Para contribuir com código, siga os passos abaixo:

### Passo 1: Fork e Clone
Faça o fork do repositório no seu GitHub e clone-o localmente:
```bash
git clone https://github.com/SEU_USUARIO/SqueakTheCloud.git
cd SqueakTheCloud
```

### Passo 2: Criar uma Branch
Crie uma branch específica para a sua modificação:
```bash
git checkout -b feature/minha-melhoria
# ou para correções:
git checkout -b patch/correcao-bug
```

### Passo 3: Executar Testes e Validações Locais
Como mantemos o pipeline do repositório remoto limpo, é altamente recomendável executar as seguintes checagens em seu ambiente local antes de comitar:

1. **Formatação de Código**:
   Garanta que todos os arquivos estejam formatados conforme os padrões oficiais de Go:
   ```bash
   go fmt ./...
   ```
2. **Análise Estática**:
   Execute o analisador estático nativo do Go para capturar erros silenciosos ou boas práticas de tipagem:
   ```bash
   go vet ./...
   ```
3. **Build de Validação**:
   Certifique-se de que o projeto compila perfeitamente sem erros:
   ```bash
   go build -o squeak-audit main.go
   ```

---

## ✉️ Diretrizes para Pull Requests (PRs)

Ao enviar o seu Pull Request, certifique-se de que:
*   As mensagens de commit sejam claras e sigam a convenção de Commits Semânticos:
    *   `feat:` para novas funcionalidades (ex: `feat: add storage enumeration for aws`)
    *   `fix:` para correções de bugs
    *   `docs:` para atualizações na documentação
    *   `chore:` para tarefas de manutenção geral
*   O PR aponte para a branch `main` do repositório original.
*   Você descreva na descrição do PR qual Issue está sendo resolvida (ex: *Resolves #3*).

---

## ⚖️ Código de Conduta e Licença

Ao contribuir para este repositório, você concorda que o seu código será disponibilizado sob a licença MIT do projeto.
