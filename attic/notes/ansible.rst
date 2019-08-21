***********************************************************************************
Arto's Notes re: `Ansible <https://en.wikipedia.org/wiki/Ansible_%28software%29>`__
***********************************************************************************

::

   $ sudo port install ansible

   $ port contents ansible | fgrep /opt/local/bin
     /opt/local/bin/ansible
     /opt/local/bin/ansible-doc
     /opt/local/bin/ansible-galaxy
     /opt/local/bin/ansible-playbook
     /opt/local/bin/ansible-pull
     /opt/local/bin/ansible-vault

   $ sudo pip install ansible  # may be more up to date

`Modules <https://docs.ansible.com/ansible/list_of_all_modules.html>`__
=======================================================================

`Core Modules <https://docs.ansible.com/ansible/modules_core.html>`__
---------------------------------------------------------------------

* `apt
  <https://docs.ansible.com/ansible/apt_module.html>`__
* `apt_key
  <https://docs.ansible.com/ansible/apt_key_module.html>`__
* `apt_repository
  <https://docs.ansible.com/ansible/apt_repository_module.html>`__
* `bundler
  <https://docs.ansible.com/ansible/bundler_module.html>`__
* `command
  <https://docs.ansible.com/ansible/command_module.html>`__
* `cron
  <https://docs.ansible.com/ansible/cron_module.html>`__
* `docker
  <https://docs.ansible.com/ansible/docker_module.html>`__
* `docker_image
  <https://docs.ansible.com/ansible/docker_image_module.html>`__
* `docker_login
  <https://docs.ansible.com/ansible/docker_login_module.html>`__
* `file
  <https://docs.ansible.com/ansible/file_module.html>`__
* `gem
  <https://docs.ansible.com/ansible/gem_module.html>`__
* `get_url
  <https://docs.ansible.com/ansible/get_url_module.html>`__
* `git
  <https://docs.ansible.com/ansible/git_module.html>`__
* `group
  <https://docs.ansible.com/ansible/group_module.html>`__
* `hostname
  <https://docs.ansible.com/ansible/hostname_module.html>`__
* `mysql_db
  <https://docs.ansible.com/ansible/mysql_db_module.html>`__
* `mysql_user
  <https://docs.ansible.com/ansible/mysql_user_module.html>`__
* `package
  <https://docs.ansible.com/ansible/package_module.html>`__
* `postgresql_db
  <https://docs.ansible.com/ansible/postgresql_db_module.html>`__
* `postgresql_ext
  <https://docs.ansible.com/ansible/postgresql_ext_module.html>`__
* `postgresql_lang
  <https://docs.ansible.com/ansible/postgresql_lang_module.html>`__
* `postgresql_privs
  <https://docs.ansible.com/ansible/postgresql_privs_module.html>`__
* `postgresql_user
  <https://docs.ansible.com/ansible/postgresql_user_module.html>`__
* `script
  <https://docs.ansible.com/ansible/script_module.html>`__
* `service
  <https://docs.ansible.com/ansible/service_module.html>`_-
* `slurp
  <https://docs.ansible.com/ansible/slurp_module.html>`__
* `shell
  <https://docs.ansible.com/ansible/shell_module.html>`__
* `sysctl
  <https://docs.ansible.com/ansible/sysctl_module.html>`__
* `template
  <https://docs.ansible.com/ansible/template_module.html>`__
* `ufw
  <https://docs.ansible.com/ansible/ufw_module.html>`__
* `uri
  <https://docs.ansible.com/ansible/uri_module.html>`__
* `user
  <https://docs.ansible.com/ansible/user_module.html>`__
* `zfs
  <https://docs.ansible.com/ansible/zfs_module.html>`__

`Extra Modules <https://docs.ansible.com/ansible/modules_extra.html>`__
-----------------------------------------------------------------------

* `pear
  <https://docs.ansible.com/ansible/pear_module.html>`__
* `virt
  <https://docs.ansible.com/ansible/virt_module.html>`__
* `virt_net
  <https://docs.ansible.com/ansible/virt_net_module.html>`__
* `virt_pool
  <https://docs.ansible.com/ansible/virt_pool_module.html>`__
