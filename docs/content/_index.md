---
title: "Squeak the Cloud 🐁"
description: "Ferramenta rápida, modular e focada em pós-exploração e inteligência em identidades (CIEM) para ambientes multi-cloud."
layout: "page"
---

<p align="center">
  <img src="/img/banner.png" alt="Squeak the Cloud Banner" width="700">
</p>

## O que é Squeak the Cloud?

**Squeak the Cloud** é uma ferramenta de pós-exploração e inteligência em identidades (CIEM) de alto desempenho focada em ambientes multi-cloud. Desenvolvida em Go, ela permite identificar de forma automatizada e eficiente caminhos ocultos de escalada de privilégios (**Shadow Admin**), gaps de OPSEC e vetores de movimentação lateral.

---

## ⚡ Principais Recursos

*   **Rápido e Portátil**: Compilado em um único binário estático e leve, pronto para ser executado em jump boxes ou diretamente no terminal do operador.
*   **Detecção de Shadow Admin**: Identifica caminhos ocultos de escalada de privilégios a partir de identidades limitadas.
*   **Mapeamento de Superfície e Movimentação Lateral**: Encontra chaves de API expostas, contas de serviço desativadas com chaves válidas e atribuições complexas.
*   **Avaliação de OPSEC**: Verifica se logs cruciais (como AWS CloudTrail) estão ativos antes de realizar ações que possam gerar alertas.
*   **Saída Estruturada**: Resultados em formato JSON, ideais para integração com analisadores de grafos (BloodHound, Cartography, etc.) e scripts de automação.

---

## 🧭 Navegação Rápida

Comece a explorar a documentação pelas seções principais:

*   **[Instalação e Configuração](/docs/getting-started/)**: Como compilar o projeto e configurar as credenciais dos provedores AWS, Azure e GCP.
*   **[Uso e Opções da CLI](/docs/usage/)**: Veja exemplos práticos de execução e como usar as flags de controle.
*   **[Vetores de Ataque Analisados](/docs/attack-vectors/)**: Entenda as permissões críticas monitoradas e mapeadas em cada provedor de nuvem.
*   **[Estrutura de Resultados](/docs/results/)**: Compreenda o formato de saída JSON e como interpretar o índice consolidado.
