.PHONY: dist test
default: help

install:
	npm run bootstrap

dev:
	npm run dev

new:
	npm run new:component $(filter-out $@,$(MAKECMDGOALS))

build: install
	npm run build

deploy:
	npm run deploy

deploy-doc:
	npm run deploy:doc

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake new <component-name> [中文名]\033[0m\t---  创建新组件 package. 例如 'make new button 按钮'"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  开发模式"
	@echo "   \033[35mmake build\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  编译项目，生成目标文件"
	@echo "   \033[35mmake deploy\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  部署 组件库"
	@echo "   \033[35mmake deploy-doc\033[0m\t\033[0m\t\033[0m\t---  部署 文档"
