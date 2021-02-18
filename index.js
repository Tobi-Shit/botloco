const  { create , Client }  =  require ( '@ open-wa / wa-automate' )  // As consts aqui declaram as funções de outros arquivos
const  welcome  =  require ( './lib/welcome' )  // Ou de modulos que usei
const  kconfig  =  require ( './config' )
 opções  const =  require ( './options' )
const  color  =  require ( './lib/color' )
const  config  =  require ( './lib/config/config.json' )

// Cria um cliente de inicialização do BOT
const  start  =  ( kill =  new  Client ( ) )  =>  {
    console . log ( cor ( '\ n> DEV OFICIAL =' ) ,  cor ( 'KillovSky> https://wa.me/+5531984159437' ,  'amarelo' ) )
	console . log ( cor ( '\ n> GRUPO OFICIAL =' ) ,  cor ( 'https://chat.whatsapp.com/KCV4iZ2TrRm1D0whPyCmrv' ,  'amarelo' ) )
	console . log ( color ( '\ n>' ) ,  color ( 'Inicialização finalizada, os comandos podem ser usados ​​agora ...' ,  'vermelho' ) )
	
		// Forçar recarregamento caso erros erros
		matar . onStateChanged ( ( state )  =>  {
			console . log ( '[Estado da Íris]' ,  estado )
			if  ( state  ===  'UNPAIRED'  ||  state  ===  'CONFLICT'  ||  state  ===  'UNLAUNCHED' )  kill . forceRefocus ( )
		} )
	
		
        // Le as mensagens e limpa cache
        matar . onMessage ( ( assíncrono  ( mensagem )  =>  {
            matar . getAmountOfLoadedMessages ( )
            . então ( ( msg )  =>  {
                if  ( msg > = 2000 )  {
                    matar . cutMsgCache ( )
                }
            } )
            kconfig ( matar ,  mensagem )
        } ) )
		
		// Configuração do welcome
        matar . onGlobalParicipantsChanged ( async  ( heuh )  =>  {
            aguardar  bem-vindo ( matar ,  heuh )
        } )
        
		
		// Funções para caso seja adicionado em um grupo
        matar . onAddedToGroup ( async  ( chat )  =>  {
			const  wlcmsg  =  'Oi! 🌟 \ nFui requisitado como BOT para esse grupo, e estarei a disposição de vocês! 🤖 \ nSe quiserem ver minhas funcões usem / menu! '
			const  lmtgru  =  Await  mortes . getAllGroups ( )
            deixe  totalMem  =  conversar . groupMetadata . participantes . comprimento
			if  ( chat . groupMetadata . participantes . inclui ( config . proprietário ) )  {
				aguarde a  morte . sendText ( chat . id ,  wlcmsg )
			}  else  if  ( gc . length  >  config . memberLimit )  {
            	aguarde a  morte . sendText ( chat . id ,  `Um novo grupo, Eba! 😃 \ nUma pena que vocês não tem o requisito, que é ter pelo menos $ { config . memberLimit } membros. Você possui $ { totalMem } , junte mais pessoas! 😉` )
				aguarde a  morte . leaveGroup ( chat . id )
				aguarde a  morte . deleteChat ( chat . id )
			}  else  if  ( lmtgruc . length  >  config . gpLimit )  {
				aguarde a  morte . sendText ( chat . id ,  `Desculpe, estamos no maximo de grupos! \ nAtualmente estamos em $ { lmtgru . length } / $ { config . gpLimit } ` )
				aguarde a  morte . leaveGroup ( chat . id )
				aguarde a  morte . deleteChat ( chat . id )
            }  else  {
                matar . sendText ( chat . id ,  wlcmsg )
            }
        } )
		

        // Bloqueia na call
        matar . onIncomingCall ( assíncrono  ( chamada )  =>  {
            aguarde a  morte . sendText ( call . peerJid ,  `Que pena! Chamadas não são suportadas e atrapalham muito! 😊 \ nTe bloqueei para evitar novas, contate o dono wa.me/ $ { config . owner . replace ( 'c.us' ,  '' ) } para efetuar o desbloqueio. 👋` )
            aguarde a  morte . contactBlock ( call . peerJid )
        } )
    }

criar ( opções ( verdadeiro ,  iniciar ) )
    . então ( ( matar )  =>  iniciar ( matar ) )
    . catch ( ( err )  =>  novo  erro ( err ) )
