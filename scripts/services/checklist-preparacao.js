// Prof GB — Lógica pura do checklist de preparação de Configurações. Sem
// Firebase/DOM de propósito (mesmo motivo de controlador-reconciliacao.js
// não importar grade-service.js) — testável com Node puro, e evitar
// COMPONENTE_CURRICULAR_PADRAO/nomes de outros módulos aqui não é perda,
// porque este arquivo não precisa saber o nome de nenhum componente
// específico, só combinar confirmado×existia em 3 estados.
//
// Regra de status (nunca promove dado antigo pra "configurado" sozinho —
// fazer isso recriaria, um nível acima, o próprio bug que este checklist
// existe pra evitar: confundir "existe um valor" com "o professor revisou
// esse valor"):
//   pendente:    não confirmado E o documento/campo não existe no Firestore
//   revisar:     não confirmado E o documento/campo já existe (dado legado,
//                ou o padrão nunca foi conscientemente revisado)
//   configurado: confirmado === true
export function calcularStatusChecklist({
    componentesConfirmado, componentesExistiam,
    turmasConfirmado, turmasExistiam,
    gradeConfirmado, gradeExistia,
    calendarioConfirmado, calendarioExistia
}) {
    function status(confirmado, existia) {
        if (confirmado) return 'configurado';
        return existia ? 'revisar' : 'pendente';
    }

    return [
        // Selecionar/criar uma escola já é uma ação consciente do professor
        // — não precisa de flag própria, sempre configurado.
        { chave: 'escola', rotulo: 'Escola', status: 'configurado' },
        { chave: 'componentes', rotulo: 'Componentes curriculares', status: status(componentesConfirmado, componentesExistiam) },
        { chave: 'turmas', rotulo: 'Turmas', status: status(turmasConfirmado, turmasExistiam) },
        { chave: 'grade', rotulo: 'Grade semanal', status: status(gradeConfirmado, gradeExistia) },
        { chave: 'calendario', rotulo: 'Calendário', status: status(calendarioConfirmado, calendarioExistia) }
    ];
}

export function contarPendencias(listaChecklist) {
    return listaChecklist.filter(item => item.status !== 'configurado').length;
}

// Chaves (não "escola", que nunca precisa de confirmação) cujo status é
// 'revisar' agora — usado pro botão de confirmação em massa, que só faz
// sentido pra dado que JÁ existe e só falta um clique consciente de
// confirmação (nunca pra 'pendente', que ainda não tem nada pra revisar).
export function chavesParaConfirmarEmMassa(listaChecklist) {
    return listaChecklist
        .filter(item => item.chave !== 'escola' && item.status === 'revisar')
        .map(item => item.chave);
}
