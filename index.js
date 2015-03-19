
module.exports = function(method, opts) {

	return msg[method] ;
} ;


var msg = {
	'invite': 
				'INVITE sip:5753606@10.1.10.1 SIP/2.0\r\n' +
				'Via: SIP/2.0/UDP 10.1.10.101;branch=z9hG4bKac619477600\r\n' +
				'Via: SIP/2.0/UDP 10.1.10.103;branch=z9hG4bKac6194382828\r\n' +
				'Max-Forwards: 70\r\n' +
				'From: "anonymous" <sip:anonymous@anonymous.invalid>;tag=1c619456422\r\n' +
				'To: <sip:5753606@10.1.10.1>\r\n' +
				'Call-ID: 619455480112200022407@10.1.10.101\r\n' +
				'CSeq: 1 INVITE\r\n' +
				'Contact: <sip:1047@10.1.10.101:5060>\r\n' +
				'Supported: em,timer,replaces,path,resource-priority,sdp-anat\r\n' +
				'Allow: REGISTER,OPTIONS,INVITE,ACK,CANCEL,BYE,NOTIFY,PRACK,REFER,INFO,SUBSCRIBE,UPDATE\r\n' +
				'User-Agent: Audiocodes-Sip-Gateway-Mediant 1000/v.5.80A.055.002\r\n' +
				'Content-Type: application/sdp\r\n' +
				'Content-Length: 173\r\n' +
				'\r\n' +
				'v=0\r\n' +
				'o=AudiocodesGW 619440176 619439848 IN IP4 10.1.10.101\r\n' +
				's=Phone-Call\r\n' +
				'c=IN IP4 10.1.10.101\r\n' +
				't=0 0\r\n' +
				'm=audio 6010 RTP/AVP 0\r\n' +
				'a=rtpmap:0 PCMU/8000\r\n' +
				'a=ptime:20\r\n' +
				'a=sendrecv\r\n', 

	'invite-compact': 
				'INVITE sip:5753606@10.1.10.1 SIP/2.0\r\n' +
				'v: SIP/2.0/UDP 10.1.10.101;branch=z9hG4bKac619477600\r\n' +
				'v: SIP/2.0/UDP 10.1.10.103;branch=z9hG4bKac6194382828\r\n' +
				'Max-Forwards: 70\r\n' +
				'f: "anonymous" <sip:anonymous@anonymous.invalid>;tag=1c619456422\r\n' +
				't: <sip:5753606@10.1.10.1>\r\n' +
				'i: 619455480112200022407@10.1.10.101\r\n' +
				'CSeq: 1 INVITE\r\n' +
				'm: <sip:1047@10.1.10.101:5060>\r\n' +
				'k: em,timer,replaces,path,resource-priority,sdp-anat\r\n' +
				'Allow: REGISTER,OPTIONS,INVITE,ACK,CANCEL,BYE,NOTIFY,PRACK,REFER,INFO,SUBSCRIBE,UPDATE\r\n' +
				'User-Agent: Audiocodes-Sip-Gateway-Mediant 1000/v.5.80A.055.002\r\n' +
				'c: application/sdp\r\n' +
				'l: 173\r\n' +
				'\r\n' +
				'v=0\r\n' +
				'o=AudiocodesGW 619440176 619439848 IN IP4 10.1.10.101\r\n' +
				's=Phone-Call\r\n' +
				'c=IN IP4 10.1.10.101\r\n' +
				't=0 0\r\n' +
				'm=audio 6010 RTP/AVP 0\r\n' +
				'a=rtpmap:0 PCMU/8000\r\n' +
				'a=ptime:20\r\n' +
				'a=sendrecv\r\n', 
			
	'200ok': 'SIP/2.0 200 OK\r\n'+
	            'Via: SIP/2.0/UDP 10.1.10.3;rport;branch=z9hG4bK94U4tm2DStvvH;received=10.1.10.3\r\n' +
				'Call-ID: 5eb456f6-7ea4-122f-8785-001143e3cdf2\r\n' +
				'From: "5083084809" <sip:5083084809@10.1.10.3>;tag=6jce33ZK01Zgc\r\n' +
				'To: <sip:16173333456@10.1.10.200>;tag=a94c095b773be1dd6e8d668a785a9c84fac73504\r\n' +
				'Contact: <sip:16173333456@10.1.10.200:5060>\r\n' +
				'CSeq: 19710956 INVITE\r\n' +
				'Server: Dialogic-SIP/10.5.3.304 Raytheon_N0 0\r\n' +
				'Allow: INVITE, BYE, REGISTER, ACK, OPTIONS, CANCEL, SUBSCRIBE, NOTIFY, INFO, REFER, UPDATE\r\n' +
				'Supported: path, replaces, timer, tdialog\r\n' +
				'Accept: application/sdp, application/dtmf-relay, text/plain\r\n' +
				'Content-Type: application/sdp\r\n' +
				'Content-Length: 176\r\n' +
				'\r\n' +
				'v=0\r\n' +
				'o=Dialogic_SDP 143 0 IN IP4 10.1.10.200\r\n' +
				's=Dialogic-SIP\r\n' +
				'c=IN IP4 10.1.10.201\r\n' +
				't=0 0\r\n' +
				'm=audio 8108 RTP/AVP 0\r\n' +
				'a=rtpmap:0 PCMU/8000\r\n' +
				'a=silenceSupp:off - - - -\r\n' +
				'a=ptime:20\r\n'
} ;