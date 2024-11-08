import oracledb
import os

dsn = f"""
(DESCRIPTION=
    (ADDRESS=(PROTOCOL=tcps)(HOST={os.environ.get('DB_HOST')})(PORT={os.environ.get('DB_PORT')}))
    (CONNECT_DATA=(SERVICE_NAME={os.environ.get('DB_SERVICE_NAME')}))
    (SECURITY=(ssl_server_dn_match=yes))
)
"""
try: 
    connection = oracledb.connect(
        user=os.environ.get('DB_USERNAME'),
        password=os.environ.get('DB_PASSWORD'),
        dsn=dsn
        )
    print("Connection successful! catalogo")

    # Create a cursor to interact with the database
    cursor = connection.cursor()

    data = [
    "'1';'Triticum aestivum';'Tolerância à seca';'Ásia';'28';'Solo arenoso';'Semiárido';'Esta variedade de trigo tem alta resiliência à seca prolongada e consegue completar seu ciclo de vida com pouca água.'",
    "'2';'Glycine max';'Alta produtividade';'Ásia';'20';'Argiloso';'Subtropical';'Variedade adaptada para cultivo intensivo, com boa resistência a insetos e doenças foliares.'",
    "'3';'Zea mays';'Baixa estatura';'América do Sul';'18';'Solo pedregoso';'Tropical de altitude';'Planta adaptada para solos pobres e climas montanhosos, com bom rendimento em áreas limitadas.'",
    "'4';'Oryza sativa';'Resistência ao alagamento';'Ásia';'27';'Argiloso';'Tropical úmido';'Essa variedade tolera condições de alta umidade e alagamento, sendo indicada para áreas inundáveis.'",
    "'5';'Hordeum vulgare';'Alta resistência ao frio';'Europa';'10';'Rochoso';'Frio e seco';'Variedade adaptada a baixas temperaturas e à escassez de água, ideal para regiões de altitude.'",
    "'6';'Arachis hypogaea';'Crescimento rasteiro';'América do Sul';'25';'Ácido';'Tropical sazonal';'Utilizado tanto para produção de grãos como para forragem, resiste bem à seca.'",
    "'7';'Capsicum annuum';'Frutos pequenos';'América do Norte';'16';'Areia argilosa';'Temperado';'Adaptada para regiões de altitude, apresenta alta concentração de capsaicina.'",
    "'8';'Phaseolus vulgaris';'Tolerância ao calor';'América do Sul';'30';'Solo arenoso';'Árido';'Variedade tolerante ao estresse hídrico, ideal para regiões semiáridas.'",
    "'9';'Gossypium hirsutum';'Alta resiliência hídrica';'América do Norte';'27';'Argiloso';'Semiárido';'Adaptado para produção em áreas de baixa precipitação, com fibras de alta qualidade.'",
    "'10';'Solanum tuberosum';'Adaptada ao frio';'América do Sul';'12';'Pedregoso';'Montanhoso';'Variedade com excelente resistência ao frio, ideal para cultivo em alta altitude.'",
    "'11';'Helianthus annuus';'Alta tolerância ao sal';'América do Sul';'22';'Salino';'Semiárido';'Ideal para solos salinos, possui alto rendimento de óleo mesmo em condições adversas.'",
    "'12';'Cicer arietinum';'Pequeno porte';'Ásia';'32';'Arenoso';'Árido';'Variedade robusta, com ciclo curto e baixa exigência hídrica.'",
    "'13';'Brassica napus';'Alta produção de sementes';'Europa';'8';'Argiloso';'Temperado';'Adaptada a baixas temperaturas, ideal para climas temperados frios.'",
    "'14';'Pisum sativum';'Resistente ao frio';'Europa';'5';'Solo rochoso';'Alpino';'Ideal para regiões montanhosas, com tolerância a baixas temperaturas.'",
    "'15';'Cucumis melo';'Frutos pequenos';'Ásia';'30';'Arenoso';'Árido e quente';'Alta capacidade de crescer em solos salinos, possui frutos doces.'",
    "'16';'Vitis vinifera';'Baixa necessidade hídrica';'Europa';'24';'Calcário';'Mediterrâneo';'Adequada para vinicultura em regiões secas, produz frutos de alta concentração de açúcar.'"

    ]

    for line in data:
        try:

            value = line.replace(";", ",")

            query = f"""INSERT INTO CATALOG (ID, ESPECIE, FENOTIPO, LOCAL, TEMPERATURA_MEDIA, SOLO, CLIMA, OBSERVACOES) VALUES ({value})"""
            cursor.execute(query)
            connection.commit()
    
        except oracledb.DatabaseError as e:
            print(e)
except Exception as error:
    print(error)

finally:
    connection.close()
    cursor.close()