# meteormicroscope
how to use meteor

meteor --port $IP:$PORT

따라하기!~
 http://kr.discovermeteor.com/

git pull 테스트

- tagging
 .. $git tag
 .. $git tag -a v0.1 -m 'test tag'
 .. $git show v0.1
 .. $git push [remote-name] v0.1 or --tags
 .. $git reset --hard <태그명> : 각 태그 버전으로 이동하기


- remote 정보
 .. $git remote -v
 .. $git remote show [remote-name]

- branch
 .. $git branch
 .. $git branch [new branch-name]
 .. $git branch -d [branch-name] : 삭제하기
 .. $git checkout [branch-name]
 .. $git merge [branch-name] -> git push [remote-name] [branch-name]
