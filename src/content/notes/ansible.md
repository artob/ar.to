---
title: "[Ansible](https://en.wikipedia.org/wiki/Ansible_%28software%29)"
weight: 1
---

```text
$ sudo port install ansible

$ port contents ansible | fgrep /opt/local/bin
  /opt/local/bin/ansible
  /opt/local/bin/ansible-doc
  /opt/local/bin/ansible-galaxy
  /opt/local/bin/ansible-playbook
  /opt/local/bin/ansible-pull
  /opt/local/bin/ansible-vault

$ sudo pip install ansible  # may be more up to date
```

## [Modules](https://docs.ansible.com/ansible/list_of_all_modules.html)

### [Core Modules](https://docs.ansible.com/ansible/modules_core.html)

- [apt](https://docs.ansible.com/ansible/apt_module.html)
- [apt_key](https://docs.ansible.com/ansible/apt_key_module.html)
- [apt_repository](https://docs.ansible.com/ansible/apt_repository_module.html)
- [bundler](https://docs.ansible.com/ansible/bundler_module.html)
- [command](https://docs.ansible.com/ansible/command_module.html)
- [cron](https://docs.ansible.com/ansible/cron_module.html)
- [docker](https://docs.ansible.com/ansible/docker_module.html)
- [docker_image](https://docs.ansible.com/ansible/docker_image_module.html)
- [docker_login](https://docs.ansible.com/ansible/docker_login_module.html)
- [file](https://docs.ansible.com/ansible/file_module.html)
- [gem](https://docs.ansible.com/ansible/gem_module.html)
- [get_url](https://docs.ansible.com/ansible/get_url_module.html)
- [git](https://docs.ansible.com/ansible/git_module.html)
- [group](https://docs.ansible.com/ansible/group_module.html)
- [hostname](https://docs.ansible.com/ansible/hostname_module.html)
- [mysql_db](https://docs.ansible.com/ansible/mysql_db_module.html)
- [mysql_user](https://docs.ansible.com/ansible/mysql_user_module.html)
- [package](https://docs.ansible.com/ansible/package_module.html)
- [postgresql_db](https://docs.ansible.com/ansible/postgresql_db_module.html)
- [postgresql_ext](https://docs.ansible.com/ansible/postgresql_ext_module.html)
- [postgresql_lang](https://docs.ansible.com/ansible/postgresql_lang_module.html)
- [postgresql_privs](https://docs.ansible.com/ansible/postgresql_privs_module.html)
- [postgresql_user](https://docs.ansible.com/ansible/postgresql_user_module.html)
- [script](https://docs.ansible.com/ansible/script_module.html)
- [service](https://docs.ansible.com/ansible/service_module.html)-
- [slurp](https://docs.ansible.com/ansible/slurp_module.html)
- [shell](https://docs.ansible.com/ansible/shell_module.html)
- [sysctl](https://docs.ansible.com/ansible/sysctl_module.html)
- [template](https://docs.ansible.com/ansible/template_module.html)
- [ufw](https://docs.ansible.com/ansible/ufw_module.html)
- [uri](https://docs.ansible.com/ansible/uri_module.html)
- [user](https://docs.ansible.com/ansible/user_module.html)
- [zfs](https://docs.ansible.com/ansible/zfs_module.html)

### [Extra Modules](https://docs.ansible.com/ansible/modules_extra.html)

- [pear](https://docs.ansible.com/ansible/pear_module.html)
- [virt](https://docs.ansible.com/ansible/virt_module.html)
- [virt_net](https://docs.ansible.com/ansible/virt_net_module.html)
- [virt_pool](https://docs.ansible.com/ansible/virt_pool_module.html)
