export class SoftwareProjectModel {
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