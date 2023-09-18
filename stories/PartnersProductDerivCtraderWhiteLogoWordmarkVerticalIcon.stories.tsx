import type { Meta, StoryObj } from '@storybook/react';

import { PartnersProductDerivCtraderWhiteLogoWordmarkVerticalIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PartnersProductDerivCtraderWhiteLogoWordmarkVerticalIcon',
  component: PartnersProductDerivCtraderWhiteLogoWordmarkVerticalIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PartnersProductDerivCtraderWhiteLogoWordmarkVerticalIcon>;

export default meta;

type Story = StoryObj<typeof PartnersProductDerivCtraderWhiteLogoWordmarkVerticalIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
