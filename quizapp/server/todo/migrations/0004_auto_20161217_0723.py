# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-12-17 07:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0003_auto_20161214_0636'),
    ]

    operations = [
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.IntegerField(max_length=300)),
            ],
        ),
        migrations.DeleteModel(
            name='Todo',
        ),
    ]