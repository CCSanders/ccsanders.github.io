export class GameProjectModel {
	id : string;
	title : string;
	summary: string;
	description : string;
	techStack? : any[];
	type?: string;
	repo? : string;
	location? : string;
	lastUpdated?: string;
}