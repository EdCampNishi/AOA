USE db_aoa;

CREATE TABLE db_aoa.tb_agendamentos(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_agendada DATE NOT NULL,
    horario TIME,
    cliente_id INTEGER NOT NULL,
    servico_id INTEGER,
    executado BOOLEAN DEFAULT false,
    remarcaddo BOOLEAN DEFAULT false,
    dt_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    dt_atualizacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 

    CONSTRAINT FK_ClienteAgendamentos FOREIGN KEY (cliente_id)
        REFERENCES tb_clientes(id),
    CONSTRAINT FK_ServicoAgendamentos FOREIGN KEY (servico_id)
        REFERENCES tb_servicos(id),
);