var should = require('should-http'),
	request = require('supertest');
	request = require('should')

describe('Student', function(){
	var url = "http://localhost:5000";
	
	describe("find()", function(){
		it('should retrieve all student record', function(done){
			request(url)
			.get('/students')
			.end(function(err, res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			});
		});
	});

	describe("find()", function(){
		it('should retrieve all student record', function(done){
			request(url)
			.get('/students')
			.end(function(err, res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			});
		});
	});

	describe("findOne()", function(){
		it('should retrieve a specific student record', function(done){
			request(url)
			.get('/students/1')
			.end(function(err, res){
				if(err) throw err;
				res.should.have.status(200);
				done();
			});
		});
	});


	describe("insert()", function(){
		it('should be able to add a student and a student number', function(done){
			studrec = 
			{
				name: 'Angelica',
				studNo: '2013-10457'
			}
			request(url)
			.post('/students')
			.send(studrec)
			.end(function(err, res){
				if(err) throw err;
				res.should.have.status(200);
				studrec.res.body.should.be.an.instanceOf(Object)
				studrec.res.body.should.have.property('id')
				studrec.res.body.should.have.property('name')
				studrec.res.body.should.have.property('studNo').with.lengthOf(10)
				//studrec.res.body.('name').should.be.equal('Angelica')
				//studrec.res.body.('studNo').should.be.equal('2013-10457')
				done();
			});
		});
	});
});